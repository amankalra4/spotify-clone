import { bottomContainer, header, title, footer } from "./styles";

const BottomSection = () => (
    <section className={bottomContainer}>
        <header className={header}>
            <h1 className={title}>Go Premium. Be happy.</h1>
            <button>start fre trial</button>
            <footer className={footer}>
                {"* Terms and conditions apply. Open only to users who haven't already tried Premium."}
            </footer>
        </header>
    </section>
);

export default BottomSection;
