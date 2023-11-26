export default function getScreenTitle(pathname) {
  switch (pathname) {
    case '/':
      return 'Planet Press';
    case '/articles':
      return 'Articles';
    case '/events':
      return 'Events';
    case '/my-articles-and-events':
      return 'My Stuff';
    case '/account':
      return 'Account';
    default:
      return 'PlanetPress';
  }
}
