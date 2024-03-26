import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWise.</h2>
          <p>
            WorldWise is your passport to memories, A digital atlas of our
            life's journeys. From bustling cities to tranquil shores, Every
            step, every sight, WorldWise stores.
          </p>
          <p>
            With a click, a tap, our travels unfold, Mapped out in pixels,
            stories retold. Each destination, a chapter in our tale, WorldWise,
            our guide, we'll never fail.
          </p>
          <p>
            Across continents, through cultures diverse, WorldWise tracks each
            place, every traverse. So let's wander far and wide, explore anew,
            With WorldWise, our adventures continue.
          </p>
        </div>
      </section>
    </main>
  );
}
