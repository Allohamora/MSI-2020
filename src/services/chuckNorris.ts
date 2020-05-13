type ChuckCategories = string[];

interface ChuckJoke {
    categories: string[],
    created_at: string,
    icon_url: string,
    id: string,
    updated_at: string,
    url: string,
    value: string
};

interface ChuckQueryResult {
    total: number,
    result: ChuckJoke[],
}

export class ChuckNorris {   
    public baseUrl: string = "https://api.chucknorris.io/jokes";

    public async searchByQuery(query: string) {
        const response = await fetch(this.baseUrl + `/search?query=${query}`);
        const jokes = await response.json() as ChuckQueryResult;
        return jokes;
    }

    public async searchByCategory(category: string) {
        const response = await fetch(this.baseUrl + `/random?category=${category}`);
        const joke = await response.json() as ChuckJoke;
        return joke;
    }

    public async searchByRandom() {
        const response = await fetch(this.baseUrl + "/random");
        const joke = await response.json() as ChuckJoke;
        return joke;
    }

    public async getCategories() {
        const response = await fetch(this.baseUrl + "/categories");
        const categories = await response.json() as ChuckCategories;

        return categories;
    }
};