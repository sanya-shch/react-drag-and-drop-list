import React, { useState } from 'react';
import { DragDropContext } from "react-beautiful-dnd";

import { reorderColors } from "./reorder";
import { ColorMap } from "./types";

import { ColorList } from "./ColorList";

const App = () => {
    const [colorMap, setColors] = useState<ColorMap>({
        a: ["red", "green", "blue"],
        b: ["black", "white"],
        c: ["magenta", "yellow"],
        d: ["gray", "orange"],
        e: ["purple", "brown"]
    });

    return (
        <DragDropContext
            onDragEnd={({ destination, source }) => {
                if (!destination) {
                    return;
                }
                setColors(reorderColors(colorMap, source, destination));
            }}
        >
            <div>
                {
                    Object.entries(colorMap).map(([k, v]) => (
                        <ColorList
                            internalScroll
                            key={k}
                            listId={k}
                            listType="CARD"
                            colors={v}
                        />
                    ))
                }
            </div>
        </DragDropContext>
    );
};

export default App;
