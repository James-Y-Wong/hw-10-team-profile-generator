const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should instantiate an employee instance", () => {
            // Arrange
            const employee = new Employee();
            // Assert
            expect(typeof employee).toBe("object");
            
        });
        it("should set name via contructor arguments", () => {
            // Arrange
            const name = "Ashley";
            // Act
            const employee = new Employee(name);
            // Assert
            expect(employee.name).toBe(name);
        });
        it("should set id via contructor arguments", () => {
            // Arrange
            const id = 100;
            // Act
            const employee = new Employee("Ashley", id);
            // Assert
            expect(employee.id).toBe(id);
        });
        it("should set email via contructor arguments", () => {
            // Arrange
            const email = "test@test.com";
            // Act
            const employee = new Employee("Ashley", 100, email);
            // Assert
            expect(employee.email).toBe(email);
        });
    });
    describe("Getter methods", () => {
        it("should get name via getName()", () => {
            // Arrange
            const name = "Ashley";
            // Act
            const employee = new Employee(name, 100, "test@test.com");
            const employeeName = employee.getName()
            // Assert
            expect(employeeName).toBe(name);
        });
        it("should get id via getId()", () => {
            // Arrange
            const id = 100;
            // Act
            const employee = new Employee("Ashley", id, "test@test.com");
            const employeeId = employee.getId()
            // Assert
            expect(employeeId).toBe(id);
        });
        it("should get email via getEmail()", () => {
            // Arrange
            const email = "test@test.com";
            // Act
            const employee = new Employee("Ashley", 100, email);
            const employeeEmail = employee.getEmail()
            // Assert
            expect(employeeEmail).toBe(email);
        });
        it("should get role via getRole()", () => {
            // Arrange
            const role = "Employee";
            // Act
            const employee = new Employee("Ashley", 100, "test@test.com");
            const employeeRole = employee.getRole()
            // Assert
            expect(employeeRole).toBe(role);
        });
    })
});