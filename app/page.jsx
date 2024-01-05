import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim debitis,
        cum ullam deleniti iusto sunt. Sequi, voluptate. Illum tenetur repellat
        eos tempore, adipisci accusamus pariatur. Nisi voluptas optio dicta cum.
      </p>
      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>
      <h2>Company Updates</h2>
      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          aperiam hic qui illo. Velit ratione aspernatur quae quod dolorum,
          suscipit sequi consequatur laboriosam? Quisquam modi minima quo rem
          nulla aspernatur?
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut aliquam
          accusantium qui maxime debitis quidem cupiditate. Rem cum sequi
          exercitationem! Voluptates cupiditate odit commodi placeat officia
          eligendi animi aliquid itaque.
        </p>
      </div>
    </main>
  );
}
