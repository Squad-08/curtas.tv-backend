import { http } from './http'

const PORT = process.env.SERVER_PORT || 3333

http.listen(PORT, () => console.log(`Server is running on port ${PORT}.`))
