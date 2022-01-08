import React from 'react'

const Content = () => {
    return (
        <>
        <table className='bg-teal-700 py-44'>
            <tr>
            <td>
                <div className='goods'>
                <img src='https://cdn.pixabay.com/photo/2016/01/17/14/23/albert-einstein-1144965_960_720.jpg'
                className='goodsImg' />
                <div className='goodsText'>
                    <h2 className='text-2xl mb-2'>Science</h2>
                    <span className='mb-2'>explore the world</span>
                </div>
                </div>
            </td>
            <td>
                <div className='goods'>
                <img src='https://cdn.pixabay.com/photo/2016/06/29/00/42/steampunk-1485795_960_720.jpg'
                className='goodsImg' />
                <div className='goodsText'>
                    <h2 className='text-2xl mb-2'>Sci fi</h2>
                    <span className='mb-2'>Everyone likes to dream about technology of future</span>
                </div>
                </div>
            </td>
            <td>
                <div className='goods'>
                <img src='https://media.istockphoto.com/photos/batman-and-robin-superhero-postage-stamp-picture-id458237383'
                className='goodsImg' />
                <div className='goodsText'>
                    <h2 className='text-2xl mb-2'>Comics</h2>
                    <span className='mb-2'>Your favorite superheroes adventures!</span>
                </div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div className='goods'>
                <img src='https://static2.mangapoisk.ru/posters/4/16NdJ5ylj6x1ik7DoJK9vkAwutksCRLspy9otT2L.jpg'
                className='goodsImg' />
                <div className='goodsText'>
                    <h2 className='text-2xl mb-2'>Manga</h2>
                    <span className='mb-2'>If you like something exotic</span>
                </div>
                </div>
            </td>
            <td>
                <div className='goods'>
                <img src='http://nitter.domain.glass/pic/profile_images%2F1454801517874135049%2FIVTvgwPA_400x400.jpg'
                className='goodsImg' />
                <div className='goodsText'>
                    <h2 className='text-2xl mb-2'>Videogames</h2>
                    <span className='mb-2'>History, secrets and reviews of games</span>
                </div>
                </div>
            </td>
            <td>
                <div className='goods'>
                <img src='https://pbs.twimg.com/media/EORS-NBVAAEloGw.jpg'
                className='goodsImg' />
                <div className='goodsText'>
                    <h2 className='text-2xl mb-2'>Fantasy</h2>
                    <span className='mb-2'>Adventures, magic etc</span>
                </div>
                </div>
            </td>
        </tr>
        </table>
        </>
    )
}

export default Content
