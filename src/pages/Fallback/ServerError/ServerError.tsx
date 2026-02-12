interface ServerErrorProps {
  message?: string
}

// Uage: Backend crashes | API fails unexpectedly
const ServerError = ({
  message = '500 Internal Server Error'
}: ServerErrorProps) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default ServerError
