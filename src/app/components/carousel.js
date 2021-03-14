import {
    Carousel,
    CarouselControl,
    CarouselIndicators,
    CarouselItem,
    Col,
    Row
} from 'reactstrap';
import React, { useEffect, useState } from 'react';

const CoolLakeCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        console.log(props.images);
    }, []);

    let items = props.images.map((Child) => {
        return {
            Component: Child.Component,
            id: Math.random() * 1000
        };
    });

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((Child) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={Child.id}
            >
                <Row
                    md={12}
                    className="m-0 p-0 px-5 pb-5"
                    style={{
                        justifyContent: "center",
                        width: "100%"
                    }}>
                    <Col md={3}>
                        <Child.Component />
                    </Col>
                </Row>
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators className="carousel-indicators" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl className="carousel-controlbtn" direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl className="carousel-controlbtn" direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default CoolLakeCarousel;