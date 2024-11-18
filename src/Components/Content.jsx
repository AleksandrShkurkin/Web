import React, { Component } from 'react';
import styles from "./Content.module.css";
import { CSSTransition } from "react-transition-group";
import styled from 'styled-components';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', content: '', showDialog: false };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, content } = this.state;

        if (name && content) {
            this.props.onSubmit(name, content);
            this.setState({ showDialog: true, name: '', content: '' });
            setTimeout(() => this.setState({ showDialog: false }), 2000);
        }
    }

    render() {
        const StyledButton = styled.button`
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #0056b3;
        }`;

        const StyledDialog = styled.div`
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 20px;
        background-color: #28a745;
        color: white;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        z-index: 1000;`;

        return (
            <>
                <div className={styles.productDescription}>
                    <div className={styles.productTitle}>EcoFlow Purity - Smart Water Filtration Bottle</div>
                    <div className={styles.productText}>
                        EcoFlow Purity is a state-of-the-art, portable water filtration bottle designed for active individuals, travelers, and eco-conscious consumers. Combining cutting-edge filtration technology with sleek design, EcoFlow Purity provides clean, pure water wherever you are — be it in the city, on a hike, or traveling abroad.
                    </div>

                    <div className={styles.productFeatures}>
                        <div><strong>Key Features:</strong></div>
                        <ol>
                            <li>
                                <strong>Advanced 4-Stage Filtration System:</strong>
                                <ul>
                                    <li>Removes 99.99% of harmful bacteria, viruses, heavy metals, and microplastics.</li>
                                    <li>Improves water taste by reducing chlorine, fluoride, and odors.</li>
                                    <li>Maintains essential minerals like calcium and magnesium for optimal health.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Smart Water Quality Monitoring:</strong>
                                <ul>
                                    <li>Equipped with a built-in sensor, the bottle monitors water quality in real-time.</li>
                                    <li>The LED indicator on the bottle cap changes color to show whether the water is safe to drink (Green: Safe, Yellow: Needs Filter Change, Red: Unsafe).</li>
                                    <li>Syncs with the EcoFlow app, allowing you to track filter life, hydration levels, and get reminders when it’s time to replace the filter.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Sustainable & Reusable:</strong>
                                <ul>
                                    <li>Crafted from eco-friendly, BPA-free, and recyclable materials.</li>
                                    <li>Each filter lasts for up to 300 liters (about 2 months), reducing single-use plastic waste significantly.</li>
                                    <li>Filters are replaceable and 100% biodegradable.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Temperature Control:</strong>
                                <ul>
                                    <li>Insulated double-wall construction keeps your water cold for 24 hours and hot for 12 hours.</li>
                                    <li>Perfect for keeping cool on hot days or sipping warm tea on your adventures.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Ergonomic and Travel-Friendly Design:</strong>
                                <ul>
                                    <li>Lightweight (only 500g) and fits into most backpack holders or car cup holders.</li>
                                    <li>A leak-proof lid and easy-to-carry loop handle make it ideal for hikes, long trips, or daily commutes.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Self-Cleaning Mode:</strong>
                                <ul>
                                    <li>The UV-C light in the cap sterilizes the bottle’s interior and eliminates bacteria buildup at the push of a button, ensuring it’s always fresh for your next refill.</li>
                                </ul>
                            </li>
                        </ol>
                    </div>

                    <div className={styles.productIdeal}>
                        <div><strong>Ideal For:</strong></div>
                        <ul>
                            <li>Hikers and Campers</li>
                            <li>Travelers</li>
                            <li>Office and Daily Use</li>
                            <li>Sustainability Advocates</li>
                        </ul>
                    </div>

                    <div className={styles.productColors}>
                        <div><strong>Available in 4 colors:</strong></div>
                        <ul>
                            <li>Midnight Blue</li>
                            <li>Forest Green</li>
                            <li>Arctic White</li>
                            <li>Slate Black</li>
                        </ul>
                    </div>

                    <div className={styles.productConclusion}>
                        EcoFlow Purity is more than just a water bottle; it’s a lifestyle choice that prioritizes health, sustainability, and convenience. Whether you’re trekking through the wilderness or navigating a busy workday, EcoFlow ensures you always have access to fresh, filtered water with a simple sip.
                    </div>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="name">Nickname:</label>
                            <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="content">Comment:</label>
                            <textarea name="content" id="content" value={this.state.content} onChange={this.handleChange} />
                        </div>
                        <StyledButton type="submit">Submit</StyledButton>
                    </form>
                </div>
                <CSSTransition
                    in={this.state.showDialog}
                    timeout={300}
                    classNames={{
                        enter: styles.dialogEnter,
                        enterActive: styles.dialogEnterActive,
                        exit: styles.dialogExit,
                        exitActive: styles.dialogExitActive,
                    }}
                    unmountOnExit
                >
                    <StyledDialog>Comment added successfully!</StyledDialog>
                </CSSTransition>
            </>
        );
    }
}

export default Content;