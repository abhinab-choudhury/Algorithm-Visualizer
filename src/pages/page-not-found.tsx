export default function PageNotFound() {
  return (
    <div className="bg-background flex h-screen w-full flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-extrabold tracking-tight">404</h1>
      <p className="mt-4 text-2xl font-semibold">Page Not Found</p>
      <p className="text-muted-foreground mt-2 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>
    </div>
  )
}
