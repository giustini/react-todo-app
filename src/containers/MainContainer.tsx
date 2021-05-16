import "./MainContainer.scss";

import Header from "../components/header/Header";
import TodoList from "../components/todo-list/TodoList";

const MainContainer = () => (
    <div className="main-container">
        <Header />
        <TodoList />
    </div>
);

export default MainContainer;