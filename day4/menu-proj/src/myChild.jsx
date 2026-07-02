import { createPortal } from "react-dom";

function myChild() {
    return createPortal(
        <div>
            Welcome
        </div>,
        document.body
    );
}