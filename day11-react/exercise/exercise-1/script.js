/** @format */
function CheckLogin() {
  let isUserLoggedln = true;
  return <h1>{isUserLoggedln ? 'Hello User' : 'Login Now'}</h1>;
}
const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <div>
    <CheckLogin />
  </div>
);
