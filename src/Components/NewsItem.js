import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, url } = this.props;
        return (
            <div>
                <div className="card">
                    <img src={!imageUrl ? "https://cdn.vectorstock.com/i/1000x1000/48/06/image-preview-icon-picture-placeholder-vector-31284806.webp" : imageUrl} className="card-img-top" alt="No Image" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel='noreferrer' href={url} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsItem
