class Redirect {
  router: any;

  constructor(router: any) {
    this.router = router;
  }

  homePage() {
    return this.router.push('/');
  }

  favoritePage() {
    return this.router.push('/favorites');
  }
}

export default Redirect;
