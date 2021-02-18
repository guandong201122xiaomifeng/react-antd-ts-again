import React, { Component } from 'react';
import d from './d'
@d
class B extends Component {
    render() {
        return (
            <div>
                B
            </div>
        );
    }
}

// export default d(B);
export default B;
