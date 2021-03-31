import React from 'react';

import Session from '../../components/openTok/session/Session';

const Home = (props) => {
  return (
    <>
      <Session
        apiKey={props.route.params.apiKey}
        sessionId={props.route.params.sessionId}
        token={props.route.params.token}
        username={props.username}
      />
      {/* <Button
                appearance="outline"
                onPress={() => props.navigation.navigate('Auth')} > Go Back to authentication </Button> */}
    </>
  );
};

export default Home;
