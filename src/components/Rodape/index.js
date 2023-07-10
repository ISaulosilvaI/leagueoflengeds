import "./Rodape.css";

export const Rodape = () => {
  return (
    <div>
      <footer className="footer">
        <section>
          <ul>
            <li>
              {" "}
              <a href="https://www.facebook.com" target="_blank">
                <img src="/images/fb.png" alt="Logo do facebook" />
              </a>
            </li>
            <li>
              {" "}
              <a href="https://twitter.com" target="_blank">
                <img src="/images/tw.png" alt="" />
              </a>
            </li>
            <li>
              {" "}
              <a href="https://www.instagram.com/death_sasa/" target="_blank">
                <img src="/images/ig.png" alt="" />
              </a>
            </li>
          </ul>
        </section>
        <section>
          <img src="/images/logo.png" />
        </section>
        <section>
          <p>Desenvolvido por Saulo.</p>
        </section>
      </footer>
    </div>
  );
};
