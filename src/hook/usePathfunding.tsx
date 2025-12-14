import { useContext } from 'react'
import { PathFindingContext } from '../context/PathFindingContext'

export const usePathfinding = () => {
  const context = useContext(PathFindingContext)
  if (!context) {
    throw new Error('usePathfunding must be within a PathFindingProvider')
  }
  return context
}
