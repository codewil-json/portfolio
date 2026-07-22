const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = process.env.PORT || 3000
const dataFile = path.resolve(__dirname, 'subscribers.json')

const ensureDataFile = () => {
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, '[]', 'utf8')
  }
}

const sendJson = (res, statusCode, body) => {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  res.end(JSON.stringify(body))
}

const isValidEmail = (value) => {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

const saveSubscriber = (email) => {
  ensureDataFile()
  const raw = fs.readFileSync(dataFile, 'utf8')
  let subscribers = []

  try {
    subscribers = JSON.parse(raw)
    if (!Array.isArray(subscribers)) {
      subscribers = []
    }
  } catch (error) {
    subscribers = []
  }

  const alreadyAdded = subscribers.some((item) => item.email === email)
  if (!alreadyAdded) {
    subscribers.push({
      email,
      createdAt: new Date().toISOString()
    })
    fs.writeFileSync(dataFile, JSON.stringify(subscribers, null, 2), 'utf8')
  }
}

const server = http.createServer((req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    })
    res.end()
    return
  }

  if (req.method === 'POST' && req.url === '/newsletter') {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk
      if (body.length > 1e6) {
        req.connection.destroy()
      }
    })

    req.on('end', () => {
      let payload = null
      try {
        payload = JSON.parse(body)
      } catch (error) {
        sendJson(res, 400, { success: false, message: 'JSON inválido.' })
        return
      }

      if (!payload || !isValidEmail(payload.email)) {
        sendJson(res, 400, { success: false, message: 'E-mail inválido.' })
        return
      }

      try {
        saveSubscriber(payload.email)
        sendJson(res, 200, { success: true, message: 'E-mail salvo com sucesso.' })
      } catch (error) {
        sendJson(res, 500, { success: false, message: 'Erro ao salvar o e-mail.' })
      }
    })

    return
  }

  sendJson(res, 404, { success: false, message: 'Rota não encontrada.' })
})

server.listen(PORT, () => {
  console.log(`Newsletter backend rodando em http://localhost:${PORT}`)
})
