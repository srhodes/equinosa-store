import { EQUINOSAS } from '../../app/shared/EQUINOSAS'

export const selectAllEquinosas = () => {
    return EQUINOSAS;
};

// export const selectRandomEquinosa = () => {
//     return EQUINOSAS[Math.floor(EQUINOSAS.length * Math.random())];
// };

export const selectEquinosaById = (id) => {
    return EQUINOSAS.find((equinosa) => equinosa.id === parseInt(id))
}

export const selectFeaturedEquinosa = () => {
    return EQUINOSAS.find((equinosa)=> equinosa.featured)
}