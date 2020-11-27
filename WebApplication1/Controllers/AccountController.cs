using System;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Index([FromQuery] string username)
        {
            var vm = new LoginViewModel { UserName = username ?? "" };

            return View(vm);
        }

        [HttpPost]
        public IActionResult Login([FromForm] LoginData formdata)
        {
            return Redirect("/");
        }
    }

    public class LoginData
    {
        public string username { get; set; }
        public string password { get; set; }
        public DateTime date { get; set; }
    }
}
