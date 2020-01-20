import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus"

describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status="BASIC"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("BASIC");
    });
    test("is span created", () => {
        const component = create(<ProfileStatus status="BASIC"/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="BASIC"/>);
        const root = component.root;
        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });
    test("span should be contains status", () => {
        const component = create(<ProfileStatus status="BASIC"/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe('BASIC');
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="BASIC"/>);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe('BASIC');
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="BASIC"
                                                updateStatus={mockCallback}
        />);
        const instanse = component.getInstance();
        instanse.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})


