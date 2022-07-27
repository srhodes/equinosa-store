import { COMMENTS } from '../../app/shared/COMMENTS'

export const selectCommentsByEquinosaId = (equinosaId) => {
    return COMMENTS.filter((comment) => comment.equinosaId === parseInt(equinosaId))
}