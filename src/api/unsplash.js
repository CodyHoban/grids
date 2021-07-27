import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8RJk2p5xWAwaFu2LuJP_7jRC17qirzqjxQouvkvyb8Q'
    }
});