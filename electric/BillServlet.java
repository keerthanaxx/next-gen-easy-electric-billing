import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/BillServlet")
public class BillServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        double units = Double.parseDouble(request.getParameter("units"));
        double energyCharge = 0;

        if (units <= 50) {
            energyCharge = units * 1.95;
        } else if (units <= 100) {
            energyCharge = (50 * 1.95) + ((units - 50) * 3.10);
        } else {
            energyCharge = (50 * 1.95) + (50 * 3.10) + ((units - 100) * 3.10);
        }

        // Fixed Charges
        double fixedCharge = 10;
        double customerCharge = 50;
        double ed = 8.40;
        double surcharge = 0.10;
        double trueup = 14;
        double fppca = 18;
        double fppca2 = 14;
        double lossGain = -0.40;

        double total = energyCharge + fixedCharge + customerCharge + ed + surcharge + trueup + fppca + fppca2 + lossGain;

        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        // Return JSON
        out.println("{");
        out.println("\"energyCharge\": \"" + String.format("%.2f", energyCharge) + "\",");
        out.println("\"fixedCharge\": \"" + String.format("%.2f", fixedCharge) + "\",");
        out.println("\"customerCharge\": \"" + String.format("%.2f", customerCharge) + "\",");
        out.println("\"ed\": \"" + String.format("%.2f", ed) + "\",");
        out.println("\"surcharge\": \"" + String.format("%.2f", surcharge) + "\",");
        out.println("\"trueup\": \"" + String.format("%.2f", trueup) + "\",");
        out.println("\"fppca\": \"" + String.format("%.2f", fppca) + "\",");
        out.println("\"fppca2\": \"" + String.format("%.2f", fppca2) + "\",");
        out.println("\"lossGain\": \"" + String.format("%.2f", lossGain) + "\",");
        out.println("\"total\": \"" + String.format("%.2f", total) + "\"");
        out.println("}");
    }
}
