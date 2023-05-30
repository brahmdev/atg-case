import { render, screen } from "@testing-library/react"
import { Header } from "../Header"

describe("Header component", () => {
    it("render header element", () => {
        render(<Header />);
        expect(screen.getByRole("banner")).toBeVisible();
    })
})