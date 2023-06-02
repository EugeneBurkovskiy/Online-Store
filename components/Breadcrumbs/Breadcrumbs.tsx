import Container from '../Container/Container';

const Breadcrumbs = () => {
  return (
    <nav className="w-full bg-lightGray py-10">
      <Container>
        <ul className="text-4xl fw font-medium">
          <li>Catalog</li>
        </ul>
      </Container>
    </nav>
  );
};

export default Breadcrumbs;
