import { NavLink } from "react-router-dom";

export default function MainLinks() {
  return (
    <>
      <h1>Multiproject</h1>
      <nav>
        <ul>
          <NavLink to="/01-reforzamiento">01 Reforzamiento</NavLink>
        </ul>
        <ul>
          <NavLink to="/02-pdf-viewer">02 PDF Viewer</NavLink>
        </ul>
      </nav>
    </>
  );
}
