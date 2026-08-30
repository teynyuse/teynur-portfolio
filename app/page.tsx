import projects from "@/data/projects.json";
import journals from "@/data/journals.json";

export default function Home() {
  return (
    <main>
      <header>
        <h1>
          developer.
          <br />
          designer.
          <br />
          maker.
        </h1>

        <p>
          I build interactive experiences across software, hardware and design —
          turning ideas into things people can see, touch and use.
        </p>
      </header>

      <section>
        <h2>selected work:</h2>

        {projects.map((project) => (
          <article key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
          </article>
        ))}
      </section>

      <section>
        <p>
          I like working where software, design and the physical world meet.
        </p>

        <strong>
          web development / interaction design / creative technology /
          prototyping
        </strong>
      </section>

      <section>
        <h2>journal:</h2>

        {journals.map((journal) => (
          <article key={journal.id}>
            <p>{journal.category}</p>
            <h3>{journal.title}</h3>
            <p>{journal.excerpt}</p>
          </article>
        ))}
      </section>
    </main>
  );
}