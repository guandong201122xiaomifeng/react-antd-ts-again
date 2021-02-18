import React from 'react'

function d(Comp){
    return class D extends React.Component {
        render () {
            return (
                <div>
                    我是高阶组件dd
                    <Comp/>
                </div>
            )
        }
    }
}
export default d