import process from 'node:process'
import { configIO } from './config/io'

async function main() {
  const config = configIO.loadConfig()
  console.log(config)

  return 0
}

main().catch((err) => {
  console.error(err, 'Failed to start Idleness')
  process.exit(1)
})
