import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qdqgr23zvd01z45jcie1ua/master',
    cache: new InMemoryCache()
})