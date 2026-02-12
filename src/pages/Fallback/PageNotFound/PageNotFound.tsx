interface PageNotFoundProps {
  message?: string
}

// Usage: Route does not exist | Wrong URL
const PageNotFound = ({ message = '404 Not Found' }: PageNotFoundProps) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default PageNotFound
