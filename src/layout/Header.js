export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper header__nav">
        <a href="#" class="brand-logo">
          React
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
