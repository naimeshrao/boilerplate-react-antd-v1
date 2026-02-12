interface ForbiddenProps {
  message?: string
}

// User is logged in but does not have permission
const Forbidden = ({ message = 'Error 403' }: ForbiddenProps) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default Forbidden
