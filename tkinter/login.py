import tkinter as tk
from tkinter import messagebox

class SignInSignUpApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Sign In/Sign Up")

        self.current_frame = None
        self.create_signin_frame()
``
    def create_signin_frame(self):
        if self.current_frame:
            self.current_frame.destroy()

        self.current_frame = tk.Frame(self.root)
        self.current_frame.pack(padx=20, pady=20)

        tk.Label(self.current_frame, text="Sign In").grid(row=0, column=1, pady=10)
        tk.Label(self.current_frame, text="Username").grid(row=1, column=0, sticky=tk.E)
        tk.Label(self.current_frame, text="Password").grid(row=2, column=0, sticky=tk.E)

        self.signin_username_entry = tk.Entry(self.current_frame)
        self.signin_password_entry = tk.Entry(self.current_frame, show="*")

        self.signin_username_entry.grid(row=1, column=1, pady=10)
        self.signin_password_entry.grid(row=2, column=1, pady=10)

        tk.Button(self.current_frame, text="Sign In", command=self.sign_in).grid(row=3, column=1, pady=10)
        tk.Button(self.current_frame, text="Switch to Sign Up", command=self.create_signup_frame).grid(row=4, column=1, pady=10)

    def create_signup_frame(self):
        if self.current_frame:
            self.current_frame.destroy()

        self.current_frame = tk.Frame(self.root)
        self.current_frame.pack(padx=20, pady=20)

        tk.Label(self.current_frame, text="Sign Up").grid(row=0, column=1, pady=10)
        tk.Label(self.current_frame, text="Username").grid(row=1, column=0, sticky=tk.E)
        tk.Label(self.current_frame, text="Password").grid(row=2, column=0, sticky=tk.E)

        self.signup_username_entry = tk.Entry(self.current_frame)
        self.signup_password_entry = tk.Entry(self.current_frame, show="*")

        self.signup_username_entry.grid(row=1, column=1, pady=10)
        self.signup_password_entry.grid(row=2, column=1, pady=10)

        tk.Button(self.current_frame, text="Sign Up", command=self.sign_up).grid(row=3, column=1, pady=10)
        tk.Button(self.current_frame, text="Switch to Sign In", command=self.create_signin_frame).grid(row=4, column=1, pady=10)

    def sign_in(self):
        username = self.signin_username_entry.get()
        password = self.signin_password_entry.get()

        # Perform sign-in logic (you can add your own authentication logic here)
        messagebox.showinfo("Sign In", f"Sign In\nUsername: {username}\nPassword: {password}")

    def sign_up(self):
        username = self.signup_username_entry.get()
        password = self.signup_password_entry.get()

        # Perform sign-up logic (you can add your own user registration logic here)
        messagebox.showinfo("Sign Up", f"Sign Up\nUsername: {username}\nPassword: {password}")

if __name__ == "__main__":
    root = tk.Tk()
    app = SignInSignUpApp(root)
    root.mainloop()
