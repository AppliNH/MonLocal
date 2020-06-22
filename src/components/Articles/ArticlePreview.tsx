import React, { Component } from 'react';
import Stall_Item from '../../_models/Stall_Item';

interface ArticlePreviewProps {
    item: Stall_Item;
}

class ArticlePreview extends Component<ArticlePreviewProps> {
    render() {
        return (
            <div>
                <h1>Prout</h1>
            </div>
        );
    }
}

export default ArticlePreview;