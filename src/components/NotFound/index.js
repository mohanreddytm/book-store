import {Link, withRouter } from 'react-router-dom'



import './index.css'

const NotFound = (props) => {



    const {refreshToMakeRangeDefault} = props

    const onClickRefreshButton = () => {
        refreshToMakeRangeDefault()
    }

    return(
    <div className='not-found-initial-cont'>
        <img className='not-found-image' src='https://img.freepik.com/free-vector/man-infertility-concept-illustration_114360-9224.jpg?t=st=1732437738~exp=1732441338~hmac=62493e842eb4fe2964faba3ac2b74819cbb2f80770dc7fa273d31f466bb2e413&w=740' alt='not found' />
        <p className='not-found-desc'>
            Sorry! We could not find any books in that price range
        </p>

        <button onClick={onClickRefreshButton} className='not-found-refresh-button' type='button'>Refresh</button>
    </div>
    )
}

export default withRouter(NotFound)