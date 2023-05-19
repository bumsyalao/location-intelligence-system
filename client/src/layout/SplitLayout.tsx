import React from 'react';

interface SplitLayoutProps {
    children: React.ReactNode[];
}

const SplitLayout = ({
    children
}: SplitLayoutProps) => {

    const [left, right] = children;

    return (
        <section className="split-layout">
            {left}
            {right}
        </section>
    );
};

export default SplitLayout;