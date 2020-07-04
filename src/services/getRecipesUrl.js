import { url_base_api_recipe } from '../constants/api_url'

const getRecipesUrl = (textToSearch) => {
    if (textToSearch)
        return `${url_base_api_recipe}/recipes/${textToSearch}`

    return `${url_base_api_recipe}/recipes`
}

export default getRecipesUrl