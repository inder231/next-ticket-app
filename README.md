### Next.js 13

- By default all components are

  - server side rendered

- \_data/db.json

  - using json-server
  - `json-server --watch --port 8000 ./_data/db.json`

- To fetch data in nextjs
  - create the main default function -> async
  - then we can use the fetch to get data directly from server

## Cacheing feature of nextjs in server components
- For the given code sample in `tickets/TicketList.js` file
- We have a fetch request on server component in a async function.
- Here our nextjs app cache the data when someone request the TicketList page.
- Now the nextjs stores the response of fetch in cache and whenever someone else request the same page or the we are using the same component somewhere else the response we get is from cache.
- If our application database is changing frequently then we will be serving the stale data, to avoid this
- we use `revalidate` property to validate the response after a given interval of time.
- To do that we have to add an object with next property, inside which we have another object with revalidate property with number of seconds after which we will be revalidating the cache.
- `When the revalidate time expire, and someone make the request, client will get the response from the cache and next will update the cache with new data, if request is make before time expiration, client will get cached response.`
- To `opt out of using cache` `pass 0` to `revalidate` property


## Dynamic routes in nextjs
- folder structure
  - [id]  => we use square brackets to define a dynamic route and create page.tsx file inside that folder where we can access the `id` of `[id]` using `props.params` object.