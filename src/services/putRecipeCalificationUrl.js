import { url_base_api_recipe } from '../constants/api_url'

const putRecipeCalificationUrl = (id, calification) => {
    return `${url_base_api_recipe}/recipe/${id}/setcalification/${calification}`
}

export default putRecipeCalificationUrl