/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


import com.mysql.jdbc.Connection;
import com.mysql.jdbc.Statement;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.util.ArrayList;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author rahul
 */
@WebServlet(urlPatterns = {"/login"})
public class login extends HttpServlet {
   
    /** 
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code> methods.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @SuppressWarnings("empty-statement")
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            String connectionurl="jdbc:mysql://localhost:3306/xml_data_builder_db";
           Connection connection=null;
           Statement statement;
           ResultSet rs;
           Class.forName("com.mysql.jdbc.Driver");
           connection=(Connection) DriverManager.getConnection(connectionurl,"root","");
           statement=(Statement) connection.createStatement();
           
           String user=request.getParameter("user");
           String pass=request.getParameter("pass");
           
           rs=statement.executeQuery("select * from login where username = '" + user + "';");
           
            while(rs.next()){
           if(request.getParameter("user").equals(rs.getString("username"))&&request.getParameter("pass").equals(rs.getString("password"))){
           HttpSession s=request.getSession();
           ArrayList list=new ArrayList();
           list.add(user);
            s.setAttribute("key", list);

            response.sendRedirect("./dashboard.jsp");
 
 

                   //response.sendRedirect("profile");

               }
               
else
           {

               out.println("Invalid UserID or Password<br>");
               RequestDispatcher rd=request.getRequestDispatcher("/index.jsp");
               rd.include(request, response);
           }
            }
//out.println("<form action='index.jsp'><input type='submit' value='OK'></form>");
//break;



         
        }
        catch(Exception e){
            e.printStackTrace();;
        }
        finally {
            out.close();
        }
    } 

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /** 
     * Handles the HTTP <code>GET</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        processRequest(request, response);
    } 

    /** 
     * Handles the HTTP <code>POST</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        processRequest(request, response);
    }

    /** 
     * Returns a short description of the servlet.
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
