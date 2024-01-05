export const ensureAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.status(401).json({ message: "User is not authenticated" })
  }
}

export const ensureGuest = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next()
  } else {
    res.status(403).json({ message: "User is already authenticated" })
  }
}
