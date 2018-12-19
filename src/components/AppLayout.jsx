import React from "react";
import PropTypes from "prop-types";
import { Container, Menu, Header } from "semantic-ui-react";
import pick from "lodash/pick";

function AppLayout({ showBack, title = "Pop Movie", children, router }) {
  
  const goBack = e => {
    e.preventDefault();
    return router.history.goBack();
  };

  return (
    <div>
      <Menu inverted size="large" borderless className="app-nav">
        {showBack && <Menu.Item icon="chevron left" onClick={goBack} />}

        <Menu.Item header>
          <Header as="h3" inverted>
            <Header.Content>{title}</Header.Content>
          </Header>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="" icon="ellipsis vertical" />
        </Menu.Menu>
      </Menu>
      <Container fluid className="app-container">
        {children}
      </Container>
    </div>
  );
}

AppLayout.propTypes = {
  showBack: PropTypes.bool,
  title: PropTypes.string.isRequired,
  router: PropTypes.any
};

export default AppLayout;

// withLayout used to wrap a component with the layout component
export function withLayout(layoutProps) {
  return Component => componentProps => {
    // get routerProps
    const routerProps = pick(componentProps, ["history", "location", "match"]);
    // inject routerProps into AppLayout for use to navigate
    return (
      <AppLayout {...{ router: routerProps, ...layoutProps }}>
        <Component {...componentProps} />
      </AppLayout>
    );
  };
}
