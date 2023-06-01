import Container from '../Container/Container';

const Breadcrumbs = () => {
  return (
    <nav className="w-full bg-lightGray py-3">
      <Container>
        <ul className="text-3xl fw font-medium">
          <li>Catalog</li>
        </ul>
      </Container>
    </nav>
  );
};

export default Breadcrumbs;
