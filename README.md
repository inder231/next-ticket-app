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

## Static sites generation
- serving pages statically whose data does not change.

- But as our application data will be changing frequently for tickets listing page, so it cannot be statically generated
- But we cannot do it for particular ticket as tickets which are added recently will not be there.
- To get this done we have to explicitly specify to next to tell what id(tickets) has been added there so that it can generate static pages for those
## Dynamic rendering

## Not-found
- we can create not found pages for particular layout, different for different pages
- create `not-found.jsx` file and write the code inside that, it will be shown when ever there is a page which is not found.

## loading state
- To show loading state for pages which are in pages, does not effect element in layout like navbar,sidebar, which does not depend on any data to be loaded.
- we can create suspence boundary.
- to do that we have wrap component around suspence boundary.