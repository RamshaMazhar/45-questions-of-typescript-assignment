
const colors: string[] = ["red", "green", "blue"];

const indexErrorExample = () => {
    try {
        console.log(colors[3]); 
    } catch (error) {
        console.error("Caught an index error:", error);
    }
};

indexErrorExample();
